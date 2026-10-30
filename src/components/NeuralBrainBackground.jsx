import React, { useEffect, useRef } from 'react';

export default function NeuralBrainBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const parent = canvas.parentElement;

    // Stable initial dimensions
    const rect = parent.getBoundingClientRect();
    let width = Math.max(rect.width || window.innerWidth, 320);
    let height = Math.max(rect.height || 500, 320);
    canvas.width = width;
    canvas.height = height;

    // Stable target radius initialized immediately to prevent any zoom pop
    let currentRadius = Math.max(Math.min(width * 0.42, 600), Math.min(width, height) * 0.46);
    let targetRadius = currentRadius;

    const updateDimensions = () => {
      if (!canvas || !canvas.parentElement) return;
      const r = canvas.parentElement.getBoundingClientRect();
      const newW = Math.max(Math.floor(r.width), 320);
      const newH = Math.max(Math.floor(r.height), 320);

      if (newW > 0 && newH > 0) {
        if (canvas.width !== newW || canvas.height !== newH) {
          canvas.width = newW;
          canvas.height = newH;
          width = newW;
          height = newH;
          targetRadius = Math.max(Math.min(width * 0.42, 600), Math.min(width, height) * 0.46);
        }
      }
    };

    // ResizeObserver tracks container layout changes without re-initializing nodes
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(parent);
    }
    window.addEventListener('resize', updateDimensions);

    // Mouse tracking for localized synaptic excitement
    let mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e) => {
      const b = canvas.getBoundingClientRect();
      mouse.x = e.clientX - b.left;
      mouse.y = e.clientY - b.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // Pseudorandom generator with fixed seed to guarantee deterministic node geometry
    let seed = 42;
    function seededRandom() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    const nodes = [];
    const synapses = [];

    // Generates the brain architecture ONCE (never re-randomized on resize)
    function initBrainNetworkOnce() {
      nodes.length = 0;
      const numCortexNodes = 150;
      const numAmbientNodes = 36;

      // 1. Bilateral brain hemispheres
      for (let i = 0; i < numCortexNodes; i++) {
        const u = seededRandom();
        const v = seededRandom();
        const theta = u * 2 * Math.PI;
        const phi = Math.acos(2 * v - 1);

        const rBase = 0.88 + 0.14 * Math.sin(4 * theta) * Math.cos(3 * phi);
        let x = rBase * Math.sin(phi) * Math.cos(theta) * 1.45;
        let y = rBase * Math.cos(phi) * 0.78;
        let z = rBase * Math.sin(phi) * Math.sin(theta) * 0.9;

        // Longitudinal fissure between hemispheres
        const hemiDist = Math.abs(x);
        if (hemiDist < 0.28) {
          y -= (0.28 - hemiDist) * 0.6;
        }

        // Temporal lobe lateral expansion
        if (y < 0 && Math.abs(x) > 0.6) {
          x *= 1.2;
          y *= 0.85;
        }

        nodes.push({
          origX: x,
          origY: y,
          origZ: z,
          x: 0,
          y: 0,
          scale: 1,
          size: seededRandom() * 2.2 + 1.2,
          pulse: seededRandom() * Math.PI * 2,
          pulseSpeed: 0.02 + seededRandom() * 0.025,
          isAmbient: false,
          connections: []
        });
      }

      // 2. Ambient neural field
      for (let j = 0; j < numAmbientNodes; j++) {
        const angle = seededRandom() * Math.PI * 2;
        const rad = 1.35 + seededRandom() * 0.85;
        nodes.push({
          origX: Math.cos(angle) * rad * 1.5,
          origY: Math.sin(angle) * rad * 0.75,
          origZ: (seededRandom() - 0.5) * 1.2,
          x: 0,
          y: 0,
          scale: 1,
          size: seededRandom() * 1.8 + 0.8,
          pulse: seededRandom() * Math.PI * 2,
          pulseSpeed: 0.015 + seededRandom() * 0.02,
          isAmbient: true,
          connections: []
        });
      }

      // Connect axon pathways between neighboring neurons
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].origX - nodes[j].origX;
          const dy = nodes[i].origY - nodes[j].origY;
          const dz = nodes[i].origZ - nodes[j].origZ;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          const maxDist = nodes[i].isAmbient || nodes[j].isAmbient ? 0.55 : 0.42;
          if (dist < maxDist && nodes[i].connections.length < 5) {
            nodes[i].connections.push(j);
          }
        }
      }

      // Spawn electrical synapse pulses
      synapses.length = 0;
      for (let k = 0; k < 28; k++) {
        createSynapsePulse();
      }
    }

    function createSynapsePulse() {
      if (nodes.length === 0) return;
      const startIdx = Math.floor(Math.random() * nodes.length);
      const conns = nodes[startIdx].connections;
      if (conns && conns.length > 0) {
        const endIdx = conns[Math.floor(Math.random() * conns.length)];
        synapses.push({
          from: startIdx,
          to: endIdx,
          progress: 0,
          speed: 0.007 + Math.random() * 0.016,
          color: Math.random() > 0.35 ? '#6366f1' : '#06b6d4',
          size: 2.2 + Math.random() * 2
        });
      }
    }

    initBrainNetworkOnce();

    let rotationAngle = 0;
    let telemetryPulse = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);

      rotationAngle += 0.0028;
      telemetryPulse += 0.018;

      // Smooth radius interpolation prevents any sudden resize jumping
      currentRadius += (targetRadius - currentRadius) * 0.1;

      const centerX = width * 0.5;
      const centerY = height * 0.48;

      // 1. Soft cybernetic background radial aura
      const auraPulse = Math.sin(telemetryPulse) * 15;
      const auraGrad = ctx.createRadialGradient(
        centerX, centerY, 40,
        centerX, centerY, currentRadius * 1.6 + auraPulse
      );
      auraGrad.addColorStop(0, 'rgba(99, 102, 241, 0.10)');
      auraGrad.addColorStop(0.35, 'rgba(168, 85, 247, 0.06)');
      auraGrad.addColorStop(0.65, 'rgba(6, 182, 212, 0.03)');
      auraGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 1.6 + auraPulse, 0, Math.PI * 2);
      ctx.fill();

      // 2. High-tech cyber telemetry rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.setLineDash([6, 10]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 0.95, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.07)';
      ctx.setLineDash([8, 14]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 1.28, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 3. 3D coordinates calculation with rotation
      const cosA = Math.cos(rotationAngle);
      const sinA = Math.sin(rotationAngle);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        const rx = node.origX * cosA - node.origZ * sinA;
        const rz = node.origX * sinA + node.origZ * cosA;
        const ry = node.origY * 0.95 + rz * 0.1;

        const fov = 2.6;
        const perspective = fov / (fov + rz * 0.55);

        node.x = centerX + rx * currentRadius * perspective;
        node.y = centerY - ry * currentRadius * perspective;
        node.scale = perspective;
        node.depth = rz;

        // Interactive mouse impulse
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          const force = (1 - mdist / mouse.radius) * 12;
          node.x += (mdx / (mdist || 1)) * force;
          node.y += (mdy / (mdist || 1)) * force;
          node.highlight = true;
        } else {
          node.highlight = false;
        }

        node.pulse += node.pulseSpeed;
      }

      // 4. Draw Synaptic Axons
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let c = 0; c < nodeA.connections.length; c++) {
          const j = nodeA.connections[c];
          const nodeB = nodes[j];

          const avgDepth = (nodeA.depth + nodeB.depth) * 0.5;
          const baseAlpha = ((avgDepth + 1.2) / 2.4) * 0.18 + 0.04;

          const isHighlight = nodeA.highlight || nodeB.highlight;
          const lineAlpha = isHighlight ? 0.6 : Math.max(0.03, Math.min(0.24, baseAlpha));

          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);

          if (isHighlight) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 1.3;
          } else {
            ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.8 * nodeA.scale;
          }
          ctx.stroke();
        }
      }

      // 5. Draw Traveling Synaptic Pulses
      for (let s = synapses.length - 1; s >= 0; s--) {
        const pulse = synapses[s];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          synapses.splice(s, 1);
          createSynapsePulse();
          continue;
        }

        const nodeA = nodes[pulse.from];
        const nodeB = nodes[pulse.to];
        if (!nodeA || !nodeB) continue;

        const curX = nodeA.x + (nodeB.x - nodeA.x) * pulse.progress;
        const curY = nodeA.y + (nodeB.y - nodeA.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, pulse.size * nodeA.scale, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 6. Draw Neurons
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulseFactor = Math.sin(node.pulse) * 0.35 + 1;
        const nodeAlpha = ((node.depth + 1.2) / 2.4) * 0.38 + 0.22;
        const finalSize = Math.max(1, node.size * node.scale * pulseFactor);

        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);

        if (node.highlight) {
          ctx.fillStyle = '#06b6d4';
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 8;
        } else if (i % 5 === 0) {
          ctx.fillStyle = `rgba(168, 85, 247, ${nodeAlpha})`;
        } else if (i % 3 === 0) {
          ctx.fillStyle = `rgba(6, 182, 212, ${nodeAlpha})`;
        } else {
          ctx.fillStyle = `rgba(79, 70, 229, ${nodeAlpha})`;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener('resize', updateDimensions);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-500"
      />
      {/* Central soft glow wash ensuring text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.45) 60%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      {/* Top & bottom subtle fades */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-50/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
