# Bubble Chart Table
A simple Bubble Chart within a Material UI Table. This chart can be used to easily compare different datasets. I has a unique way of conveing the size difference via a Bubble right next to the actual data.

## Demo
You can find a working demo here: https://ljxc8.csb.app/
or see the example below: 

![Bubble Chart Example](https://github.com/Lawlez/Bubble-Chart-Table/blob/main/example.png?raw=true)

## usage

### installing the project

1. clone the repository 
`git clone https://github.com/Lawlez/Bubble-Chart-Table.git`

2. navigate into the project directory
`cd Bubble-Chart-Table`

3. install dependecies and start project:

`yarn install && yarn start`

4. Open a Browser pointing to
`http://localhost:3333`
the port can be set in an .env file using the PORT=3333 directive.

## Data Structure:

The Data is imported from `data.js`and is recognized in this format:

Data points can be added and customized freely, the application will display new rows or categories automatically.

```javascript
const data = {
  headCells: [
    { id: 'Total', name: 'Total' },
    { id: 'CrossSectional', name: 'Cross-sectional' },
    { id: 'Longitudinal', name: 'Longitudinal' },
    { id: 'Qualitative', name: 'Qualitative' },
    { id: 'Conceptual', name: 'Conceptual' },
    { id: 'Other', name: 'Other' },
  ],
  data: [
    {
      name: 'Depression',
      isBold: false,
      Total: 15,
      CrossSectional: 3,
      Longitudinal: 1,
      Qualitative: 0,
      Conceptual: 0,
      Other: 11,
    },
    {
      name: 'PTSD',
      isBold: false,
      Total: 7,
      CrossSectional: 4,
      Longitudinal: 0,
      Qualitative: 1,
      Conceptual: 2,
      Other: 0,
    },
    {
      name: 'Substance abuse',
      isBold: false,
      Total: 5,
      CrossSectional: 0,
      Longitudinal: 3,
      Qualitative: 0,
      Conceptual: 1,
      Other: 0,
    },
    {
      name: 'Arthritis & chronic pain',
      isBold: false,
      Total: 12,
      CrossSectional: 2,
      Longitudinal: 1,
      Qualitative: 2,
      Conceptual: 0,
      Other: 0,
    },
    {
      name: 'Cancer',
      isBold: true,
      Total: 122,
      CrossSectional: 19,
      Longitudinal: 21,
      Qualitative: 24,
      Conceptual: 9,
      Other: 5,
    },
    {
      name: 'Cardiovascular diseases',
      isBold: false,
      Total: 20,
      CrossSectional: 6,
      Longitudinal: 4,
      Qualitative: 5,
      Conceptual: 2,
      Other: 0,
    },
    {
      name: 'COPD',
      isBold: false,
      Total: 6,
      CrossSectional: 3,
      Longitudinal: 2,
      Qualitative: 0,
      Conceptual: 0,
      Other: 0,
    },
    {
      name: 'Diabetes',
      isBold: false,
      Total: 25,
      CrossSectional: 15,
      Longitudinal: 5,
      Qualitative: 3,
      Conceptual: 0,
      Other: 0,
    },
    {
      name: 'Disability',
      isBold: false,
      Total: 6,
      CrossSectional: 1,
      Longitudinal: 1,
      Qualitative: 3,
      Conceptual: 0,
      Other: 0,
    },
    {
      name: 'HIV/ AIDS',
      isBold: true,
      Total: 12,
      CrossSectional: 6,
      Longitudinal: 0,
      Qualitative: 4,
      Conceptual: 1,
      Other: 0,
    },
    {
      name: 'Multiple sclerosis',
      isBold: false,
      Total: 5,
      CrossSectional: 2,
      Longitudinal: 0,
      Qualitative: 7,
      Conceptual: 0,
      Other: 2,
    },
    {
      name: 'Stroke',
      isBold: false,
      Total: 7,
      CrossSectional: 0,
      Longitudinal: 0,
      Qualitative: 1,
      Conceptual: 2,
      Other: 2,
    },
    {
      name: 'Unspecified/ other ᶜ',
      isBold: true,
      Total: 46,
      CrossSectional: 13,
      Longitudinal: 0,
      Qualitative: 7,
      Conceptual: 18,
      Other: 0,
    },
  ],
}

export default data

```


```java
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
```
