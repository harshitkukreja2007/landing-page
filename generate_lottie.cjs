const fs = require('fs');
const path = require('path');

// Setup composition parameters (lightweight 180 frames = 3 seconds at 60 fps)
const totalFrames = 180;
const layers = [];
let layerIndex = 1;

// Easing handles for 1D properties (scalar values like Opacity)
const ease1D = {
  o: { x: [0.33], y: [0] },
  i: { x: [0.67], y: [1] }
};

// Easing handles for 2D/3D properties (vectors like Position, Scale)
const ease3D = {
  o: { x: [0.33, 0.33, 0.33], y: [0, 0, 0] },
  i: { x: [0.67, 0.67, 0.67], y: [1, 1, 1] }
};

// Colors
const purple = [0.54, 0.36, 0.96];
const green = [0.16, 0.8, 0.25];
const white = [1, 1, 1];
const darkGray = [0.15, 0.15, 0.18];
const grayStroke = [0.33, 0.33, 0.38];

// Coordinates
const leftX = 100;
const centerY = 150;
const centerX = 200;
const rightX = 300;

// ==========================================
// 1. Static Connection Line: Left to Center (Visitor -> Funnel AI)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Inbound Line",
  sr: 1,
  ks: {
    o: { a: 0, k: 25 },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [0, 0, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "sh",
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0]],
              o: [[0, 0], [0, 0]],
              v: [[leftX, centerY], [centerX, centerY]],
              c: false
            }
          },
          nm: "Path"
        },
        {
          ty: "st",
          c: { a: 0, k: white },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 1.5 },
          lc: 2,
          lj: 2,
          ml: 4,
          nm: "Stroke"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// ==========================================
// 2. Static Connection Line: Center to Right (Funnel AI -> Success)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Outbound Line",
  sr: 1,
  ks: {
    o: { a: 0, k: 25 },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [0, 0, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "sh",
          ks: {
            a: 0,
            k: {
              i: [[0, 0], [0, 0]],
              o: [[0, 0], [0, 0]],
              v: [[centerX, centerY], [rightX, centerY]],
              c: false
            }
          },
          nm: "Path"
        },
        {
          ty: "st",
          c: { a: 0, k: white },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 1.5 },
          lc: 2,
          lj: 2,
          ml: 4,
          nm: "Stroke"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// ==========================================
// 3. Left Node: Visitor Signals (Static gray node)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Visitor Node",
  sr: 1,
  ks: {
    o: { a: 0, k: 80 },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [leftX, centerY, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [14, 14] },
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: darkGray },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: grayStroke },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 1.5 },
          lc: 1,
          lj: 1,
          ml: 4,
          nm: "Stroke"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// ==========================================
// 4. Center Node: Funnel AI Engine (Pulsing purple node)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Funnel AI Node",
  sr: 1,
  ks: {
    o: { a: 0, k: 100 },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [centerX, centerY, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: {
      a: 1,
      k: [
        { t: 0, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 55, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 70, s: [125, 125, 100], o: ease3D.o, i: ease3D.i },
        { t: 85, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 180, s: [100, 100, 100] }
      ]
    }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [22, 22] },
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: purple },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: white },
          o: { a: 0, k: 80 },
          w: { a: 0, k: 1.5 },
          lc: 1,
          lj: 1,
          ml: 4,
          nm: "Stroke"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// ==========================================
// 5. Right Node: Action Triggered (Glows green when packet arrives)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Trigger Node Glow",
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: 0, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 135, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 145, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 170, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 180, v: [0] }
      ]
    },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [rightX, centerY, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [20, 20] },
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: green },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Trigger Node Base",
  sr: 1,
  ks: {
    o: { a: 0, k: 80 },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [rightX, centerY, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [14, 14] },
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: darkGray },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill"
        },
        {
          ty: "st",
          c: { a: 0, k: grayStroke },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 1.5 },
          lc: 1,
          lj: 1,
          ml: 4,
          nm: "Stroke"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// ==========================================
// 6. Traveling Signal Inbound (Left -> Center)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Inbound Signal",
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: 0, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 55, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 60, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 180, v: [0] }
      ]
    },
    r: { a: 0, k: 0 },
    p: {
      a: 1,
      k: [
        { t: 0, s: [leftX, centerY, 0], o: ease3D.o, i: ease3D.i },
        { t: 60, s: [centerX, centerY, 0] }
      ]
    },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [6, 6] },
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: purple },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// ==========================================
// 7. Traveling Signal Outbound (Center -> Right)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Outbound Signal",
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: 0, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 80, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 85, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 135, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 140, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 180, v: [0] }
      ]
    },
    r: { a: 0, k: 0 },
    p: {
      a: 1,
      k: [
        { t: 80, s: [centerX, centerY, 0], o: ease3D.o, i: ease3D.i },
        { t: 140, s: [rightX, centerY, 0] }
      ]
    },
    a: { a: 0, k: [0, 0, 0] },
    s: { a: 0, k: [100, 100, 100] }
  },
  shapes: [
    {
      ty: "gr",
      it: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [6, 6] },
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: green },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, 0] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 },
          nm: "Transform"
        }
      ],
      nm: "Group"
    }
  ],
  st: 0,
  bm: 0,
  ip: 0,
  op: totalFrames
});

// Build final Lottie JSON
const lottie = {
  v: "5.5.7",
  fr: 60,
  ip: 0,
  op: totalFrames,
  w: 400,
  h: 300,
  nm: "Visitor Orchestrator Flow",
  assets: [],
  layers: layers
};

// Write output
const destDir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}
const destFile = path.join(destDir, 'about_animation.json');
fs.writeFileSync(destFile, JSON.stringify(lottie, null, 2), 'utf8');

console.log('✓ Successfully generated fresh minimal Lottie JSON at:', destFile);
