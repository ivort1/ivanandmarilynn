import React, { useMemo } from 'react';

// React Table
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import SeatingChartData from '../containers/SeatingChartData.json';
import { Columns } from './Columns';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import GlobalFilter from './GlobalFilter';

const ReactTable = () => {

    // React Table
    const columns = useMemo(() => Columns, [])
    const data = useMemo(() => SeatingChartData, [])
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable({columns,data}, useGlobalFilter, useSortBy)
    const { globalFilter } = state

    // Font Awesome
    const upArrow = <span style={{marginLeft: '0.5rem'}}><FontAwesomeIcon icon={faCaretUp} /></span>
    const downArrow = <span style={{marginLeft: '0.5rem'}}><FontAwesomeIcon icon={faCaretDown} /></span>
    const sortArrow = <span style={{marginLeft: '0.5rem'}}><FontAwesomeIcon icon={faSort} /></span>

    return(
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            
            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? downArrow : upArrow) : sortArrow}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr> 
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ReactTable