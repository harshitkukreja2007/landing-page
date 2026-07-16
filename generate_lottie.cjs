const fs = require('fs');
const path = require('path');

// Setup composition parameters (lightweight 240 frames = 4 seconds at 60 fps)
const totalFrames = 240;
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
const darkGray = [0.12, 0.12, 0.14];
const grayStroke = [0.24, 0.24, 0.27];

// Coordinates
const leftX = 100;
const centerX = 200;
const centerY = 150;
const rightX = 300;

const leftNodes = [70, 110, 150, 190, 230]; // Y positions of 5 input event nodes
const rightNodes = [90, 130, 170, 210];   // Y positions of 4 output destination nodes

// ==========================================
// 1. Inbound Connection Lines (Left nodes to Center)
// ==========================================
leftNodes.forEach((y, idx) => {
  layers.push({
    ty: 4,
    ind: layerIndex++,
    nm: `Inbound Line ${idx}`,
    sr: 1,
    ks: {
      o: { a: 0, k: 15 },
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
                v: [[leftX, y], [centerX, centerY]],
                c: false
              }
            },
            nm: "Path"
          },
          {
            ty: "st",
            c: { a: 0, k: white },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 1 },
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
});

// ==========================================
// 2. Outbound Connection Lines (Center to Right nodes)
// ==========================================
rightNodes.forEach((y, idx) => {
  // Let the connection to Email (idx === 0, y === 90) glow slightly during activation
  const isTarget = idx === 0;
  
  layers.push({
    ty: 4,
    ind: layerIndex++,
    nm: `Outbound Line ${idx}`,
    sr: 1,
    ks: {
      o: isTarget ? {
        a: 1,
        k: [
          { t: 0, v: [15], o: ease1D.o, i: ease1D.i },
          { t: 110, v: [15], o: ease1D.o, i: ease1D.i },
          { t: 140, v: [50], o: ease1D.o, i: ease1D.i },
          { t: 190, v: [15], o: ease1D.o, i: ease1D.i },
          { t: 240, v: [15] }
        ]
      } : { a: 0, k: 15 },
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
                v: [[centerX, centerY], [rightX, y]],
                c: false
              }
            },
            nm: "Path"
          },
          {
            ty: "st",
            c: { a: 0, k: isTarget ? purple : white },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 1 },
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
});

// ==========================================
// 3. Static Left Nodes (Visitor Signals)
// ==========================================
leftNodes.forEach((y, idx) => {
  layers.push({
    ty: 4,
    ind: layerIndex++,
    nm: `Visitor Node ${idx}`,
    sr: 1,
    ks: {
      o: { a: 0, k: 80 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [leftX, y, 0] },
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
            s: { a: 0, k: [10, 10] },
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
            w: { a: 0, k: 1 },
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
        { t: 60, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 85, s: [120, 120, 100], o: ease3D.o, i: ease3D.i },
        { t: 110, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 240, s: [100, 100, 100] }
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
          s: { a: 0, k: [20, 20] },
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
// 5. Center Outer Glow: Analyzing Intent (expanding soft glow ring)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Analyzing Glow Ring",
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: 0, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 60, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 85, v: [60], o: ease1D.o, i: ease1D.i },
        { t: 110, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 240, v: [0] }
      ]
    },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [centerX, centerY, 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: {
      a: 1,
      k: [
        { t: 60, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 110, s: [180, 180, 100] },
        { t: 240, s: [180, 180, 100] }
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
          ty: "st",
          c: { a: 0, k: purple },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 },
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
// 6. Static Right Nodes (Action Destinations)
// ==========================================
rightNodes.forEach((y, idx) => {
  layers.push({
    ty: 4,
    ind: layerIndex++,
    nm: `Destination Node ${idx}`,
    sr: 1,
    ks: {
      o: { a: 0, k: 80 },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [rightX, y, 0] },
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
            s: { a: 0, k: [10, 10] },
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
            w: { a: 0, k: 1 },
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
});

// ==========================================
// 7. Active Destination Success Glow (Green flash on Email destination)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Target Node Activation Glow",
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: 0, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 135, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 145, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 185, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 200, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 240, v: [0] }
      ]
    },
    r: { a: 0, k: 0 },
    p: { a: 0, k: [rightX, rightNodes[0], 0] },
    a: { a: 0, k: [0, 0, 0] },
    s: {
      a: 1,
      k: [
        { t: 135, s: [100, 100, 100], o: ease3D.o, i: ease3D.i },
        { t: 155, s: [140, 140, 100], o: ease3D.o, i: ease3D.i },
        { t: 185, s: [100, 100, 100] },
        { t: 240, s: [100, 100, 100] }
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
          s: { a: 0, k: [12, 12] },
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

// ==========================================
// 8. Traveling Packets: Inbound (Left nodes -> Center)
// ==========================================
leftNodes.forEach((y, idx) => {
  // Let the packets be staggered: Scroll (frame 10-40), Click (15-45), Pricing (20-50), Checkout (25-55), Exit Intent (30-60)
  const startT = 10 + idx * 5;
  const endT = startT + 30;
  
  layers.push({
    ty: 4,
    ind: layerIndex++,
    nm: `Inbound Signal Packet ${idx}`,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { t: 0, v: [0], o: ease1D.o, i: ease1D.i },
          { t: startT, v: [0], o: ease1D.o, i: ease1D.i },
          { t: startT + 5, v: [100], o: ease1D.o, i: ease1D.i },
          { t: endT - 5, v: [100], o: ease1D.o, i: ease1D.i },
          { t: endT, v: [0], o: ease1D.o, i: ease1D.i },
          { t: 240, v: [0] }
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          { t: startT, s: [leftX, y, 0], o: ease3D.o, i: ease3D.i },
          { t: endT, s: [centerX, centerY, 0] }
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
            s: { a: 0, k: [4, 4] },
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
});

// ==========================================
// 9. Traveling Packet: Outbound (Center -> Email Destination)
// ==========================================
layers.push({
  ty: 4,
  ind: layerIndex++,
  nm: "Outbound Signal Packet",
  sr: 1,
  ks: {
    o: {
      a: 1,
      k: [
        { t: 0, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 110, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 115, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 135, v: [100], o: ease1D.o, i: ease1D.i },
        { t: 140, v: [0], o: ease1D.o, i: ease1D.i },
        { t: 240, v: [0] }
      ]
    },
    r: { a: 0, k: 0 },
    p: {
      a: 1,
      k: [
        { t: 110, s: [centerX, centerY, 0], o: ease3D.o, i: ease3D.i },
        { t: 140, s: [rightX, rightNodes[0], 0] }
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
          s: { a: 0, k: [4, 4] },
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
