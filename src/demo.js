import React from 'react'
import { makeStyles } from '@material-ui/core/'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import data from './data'

const useStyles = makeStyles({
  table: {
    width: 1000,
    overflow: 'visible',
    padding: 2,
    wordWrap: 'break-word',  
    '& .MuiTableCell-sizeSmall': {
      padding: 6,
      minWidth: 70,
      maxWidth: 95,
    },
    '& @media print': {
      '& text[fontWeight=bold]': {
        fontWeight: 'bold!important',
      },
    },
  },
})

const normalize = (val, max = 24, min = 0) => {
  const minRange = 2
  const maxRange = 20
  const variation = Math.abs((maxRange - minRange) / (max - min).toFixed(2))

  return val === 0 ? val : (minRange + (val - min) * variation).toFixed(2)
}

export default function BasicTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table size="small" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {data.HeadCells.map(cell => (
              <TableCell key={cell.id} variant="body" align="center">
                {cell.name}
              </TableCell> 
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row) => (
            <TableRow key={row.name}>
              {Object.keys(row).map(
                (cell, cellId) =>
                  cell !== 'fett' && (
                    <TableCell
                      key={row.name + cell + row[cell]}
                      component="th"
                      scope="row"
                      size="small"
                    >
                      {cellId === 0 ? (
                        row.fett ? (
                          <b>{row[cell]}</b>
                        ) : (
                          row[cell]
                        )
                      ) : (
                        <svg height="45" width="50">
                          {row.name === 'Unspecified' ||
                          row.name === 'Child related' ||
                          row.name === 'Mental health' ||
                          cell === 'Total' ||
                          row.name === 'Physical health' ? (
                            <text
                              fill="#000"
                              fontSize="17"
                              fontWeight={'bold'}
                              stroke="#fff"
                              strokeWidth=".2"
                              transform="translate(0 30)"
                            >
                              {row[cell] === 0 ? '\u2013' : row[cell]}
                            </text>
                          ) : (
                            <>
                              <circle
                                cx="24"
                                cy="22"
                                r={normalize(row[cell])}
                                strokeWidth="3"
                                fill="#6D98EC"
                              />
                              <text
                                fill="#000"
                                fontSize="18"
                                fontWeight="500"
                                stroke="#fff"
                                stroke-width="0.5"
                                transform="translate(0 28)"
                              >
                                {row[cell] === 0 ? '\u2013' : row[cell]}
                              </text>
                            </>
                          )}
                        </svg>
                      )}
                    </TableCell>
                  ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
