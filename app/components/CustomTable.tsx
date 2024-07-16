export const CustomTable = ({ children }: any) => (
	<table className="min-w-full divide-y divide-gray-200">{children}</table>
);

export const CustomTableRow = ({ children }: any) => (
	<tr className="bg-white">{children}</tr>
);

export const CustomTableCell = ({ children }: any) => (
	<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
		{children}
	</td>
);
