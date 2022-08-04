const scullingExample = [
    {
     "Scull": "M1X",
     "Span": 159,
     "OarLength": 286,
     "Inboard": 88,
     "Outboard": 198,
     "Overlap": 17,
     "GearingRatio": 2.49
    },
    {
     "Scull": "M2X",
     "Span": 158,
     "OarLength": 286,
     "Inboard": 87.5,
     "Outboard": 198.5,
     "Overlap": 17,
     "GearingRatio": 2.51
    },
    {
     "Scull": "M4X",
     "Span": 158,
     "OarLength": 289,
     "Inboard": 87.5,
     "Outboard": 201.5,
     "Overlap": 17,
     "GearingRatio": 2.55
    },
    {
     "Scull": "W1X",
     "Span": 159,
     "OarLength": 284,
     "Inboard": 88,
     "Outboard": 196,
     "Overlap": 17,
     "GearingRatio": 2.47
    },
    {
     "Scull": "W2X",
     "Span": 158,
     "OarLength": 284,
     "Inboard": 87.5,
     "Outboard": 196.5,
     "Overlap": 17,
     "GearingRatio": 2.49
    },
    {
     "Scull": "W4X+",
     "Span": 158,
     "OarLength": 285,
     "Inboard": 87.5,
     "Outboard": 198.5,
     "Overlap": 17,
     "GearingRatio": 2.5
    },
    {
     "Scull": "W4X",
     "Span": 158,
     "OarLength": 286,
     "Inboard": 87.5,
     "Outboard": 198.5,
     "Overlap": 17,
     "GearingRatio": 2.51
    }
]

const sweepExample = [
    {
        "Sweep": "M2-",
        "RiggerSpread": 87,
        "OarLength": 374,
        "Inboard": 117,
        "Outboard": 257,
        "Overlap": 30,
        "GearingRatio": 2.95
      },
      {
        "Sweep": "M2+",
        "RiggerSpread": 88,
        "OarLength": 374,
        "Inboard": 118,
        "Outboard": 256,
        "Overlap": 30,
        "GearingRatio": 2.91
      },
      {
        "Sweep": "M4-",
        "RiggerSpread": 85,
        "OarLength": 374,
        "Inboard": 115,
        "Outboard": 259,
        "Overlap": 30,
        "GearingRatio": 3.05
      },
      {
        "Sweep": "M4+",
        "RiggerSpread": 86,
        "OarLength": 374,
        "Inboard": 116,
        "Outboard": 258,
        "Overlap": 30,
        "GearingRatio": 3
      },
      {
        "Sweep": "M8+",
        "RiggerSpread": 84,
        "OarLength": 374,
        "Inboard": 114,
        "Outboard": 260,
        "Overlap": 30,
        "GearingRatio": 3.1
      },
      {
        "Sweep": "W2-",
        "RiggerSpread": 86,
        "OarLength": 372,
        "Inboard": 116,
        "Outboard": 256,
        "Overlap": 30,
        "GearingRatio": 2.98
      },
      {
        "Sweep": "W4-",
        "RiggerSpread": 85,
        "OarLength": 372,
        "Inboard": 115,
        "Outboard": 257,
        "Overlap": 30,
        "GearingRatio": 3.02
      },
      {
        "Sweep": "W8+",
        "RiggerSpread": 84,
        "OarLength": 372,
        "Inboard": 114,
        "Outboard": 258,
        "Overlap": 30,
        "GearingRatio": 3.07
      }
]

export function getSweepExample() {
    return sweepExample;
}

export function getScullingExample() {
    return scullingExample;
}