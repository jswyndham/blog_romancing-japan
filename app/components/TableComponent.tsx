const TableComponent = ({ value }: any) => {
	if (!value || !value.rows) {
		console.error('TableComponent received invalid data:', value);
		return <p>No table data available</p>;
	}

	return (
		<table className="table-auto border-collapse w-full textarea-md my-4 border-2 border-slate-400">
			<thead>
				<tr>
					{value.columns ? (
						value.columns.map((col: any, index: number) => (
							<th key={index} className="border px-4 py-2">
								{col}
							</th>
						))
					) : (
						<th className="border px-4 py-2">Data</th>
					)}
				</tr>
			</thead>
			<tbody>
				{value.rows.map((row: any, index: number) => (
					<tr
						key={index}
						className={
							index === 0
								? 'bg-gray-200 font-bold text-blue-700'
								: ''
						}
					>
						{row.cells.map((cell: any, i: number) => (
							<td
								key={i}
								className={`border border-slate-300 px-4 py-2 ${
									i === 0 ? 'bg-blue-50' : ''
								}`}
							>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableComponent;
