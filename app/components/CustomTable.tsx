import React from 'react';

export const CustomTableRow: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <tr>{children}</tr>;

export const CustomTableCell: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <td>{children}</td>;

export const CustomTable: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => <table>{children}</table>;
