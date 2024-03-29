import { Fragment } from 'react'

export default function FilterToggle({ filter, onClick, isActive }) {
	return (
		<Fragment>
			{ filter &&
				<div className={'toggle'+ (isActive ? ' is-active' : '')} onClick={onClick}>
					{filter.label}
				</div>
			}
		</Fragment>
	);
}