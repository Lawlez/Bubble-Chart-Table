# Bubble Chart Table
A simple Bubble Chart within a Material UI Table. This chart can be used to easily compare different datasets. I has a unique way of conveing the size difference via a Bubble right next to the actual data.

## Demo
You can find a working demo here: https://ljxc8.csb.app/
or see the example below: 

![Bubble Chart Example](https://github.com/Lawlez/Bubble-Chart-Table/blob/main/example.png?raw=true)

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


MIT License

Copyright (c) 2021 Dominik Feger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
