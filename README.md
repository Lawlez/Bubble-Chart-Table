# Bubble Chart Table
A Bubble Chart within a Material UI Table. 


## Demo
You can fidn a working demo here: https://ljxc8.csb.app/

## Data Structure:

The Data is imported from `data.js`and is recognized in this format:

```javascript
const data = {
  HeadCells: [
  // easily define new Head Cells with id/name
    { id: 'Total', name: 'Total' },
    { id: 'CrossSectional', name: 'Cross-sectional' },
    { id: 'Longitudinal', name: 'Longitudinal' },
    { id: 'Qualitative', name: 'Qualitative' },
    { id: 'Conceptual', name: 'Conceptual' },
    { id: 'MyDataPoint', name: 'My Fancy Data Point' },
  ],
  data: [
    {
      name: 'Depression', // required
      fett: false, // true to display the row title in bold
      Total: 4,
      CrossSectional: 3,
      Longitudinal: 1,
      Qualitative: 0,
      Conceptual: 0,
      MyDataPoint: 11,
    },
    {
      name: 'PTSD',
      fett: false,
      Total: 7,
      CrossSectional: 4,
      Longitudinal: 0,
      Qualitative: 0,
      Conceptual: 2,
      MyDataPoint: 0,
    },
    {
      name: 'Substance abuse',
      fett: false,
      Total: 5,
      CrossSectional: 0,
      Longitudinal: 3,
      Qualitative: 0,
      Conceptual: 1,
      MyDataPoint: 0,
    },
    {
      name: 'Arthritis & chronic pain',
      fett: false,
      Total: 12,
      CrossSectional: 2,
      Longitudinal: 1,
      Qualitative: 2,
      Conceptual: 0,
      MyDataPoint: 0,
    },
    {
      name: 'Cancer',
      fett: true,
      Total: 122,
      CrossSectional: 19,
      Longitudinal: 21,
      Qualitative: 24,
      Conceptual: 9,
      MyDataPoint: 5,
    },
    {
      name: 'Cardiovascular diseases',
      fett: false,
      Total: 20,
      CrossSectional: 6,
      Longitudinal: 4,
      Qualitative: 5,
      Conceptual: 2,
      MyDataPoint: 0,
    },
    {
      name: 'COPD',
      fett: false,
      Total: 6,
      CrossSectional: 3,
      Longitudinal: 2,
      Qualitative: 0,
      Conceptual: 0,
      MyDataPoint: 0,
    },
    {
      name: 'Diabetes',
      fett: false,
      Total: 25,
      CrossSectional: 15,
      Longitudinal: 5,
      Qualitative: 3,
      Conceptual: 0,
      MyDataPoint: 0,
    },
    {
      name: 'Disability',
      fett: false,
      Total: 6,
      CrossSectional: 1,
      Longitudinal: 1,
      Qualitative: 3,
      Conceptual: 0,
      MyDataPoint: 0,
    },
    {
      name: 'HIV/ AIDS',
      fett: true,
      Total: 12,
      CrossSectional: 6,
      Longitudinal: 0,
      Qualitative: 4,
      Conceptual: 1,
      MyDataPoint: 0,
    },
    {
      name: 'Multiple sclerosis',
      fett: false,
      Total: 5,
      CrossSectional: 2,
      Longitudinal: 0,
      Qualitative: 7,
      Conceptual: 0,
      MyDataPoint: 2,
    },
    {
      name: 'Stroke',
      fett: false,
      Total: 7,
      CrossSectional: 0,
      Longitudinal: 0,
      Qualitative: 1,
      Conceptual: 2,
      MyDataPoint: 2,
    },
    {
      name: 'Unspecified/ other ᶜ',
      fett: true,
      Total: 46,
      CrossSectional: 13,
      Longitudinal: 0,
      Qualitative: 7,
      Conceptual: 18,
      MyDataPoint: 0,
    },
  ],
}

export default data

```

