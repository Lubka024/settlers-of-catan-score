import { Component, DateFieldView, NumberField, SelectField } from '@contember/admin'

export const PlayerScoreForm = Component(() => <>
	<SelectField field="player" label="Player" lazy options="Player.name" allowNull />
	<SelectField
		field="gameSession"
		label="Game session"
		lazy={false}
		options="GameSession"
		optionLabel={<>
			Date{': '}
			<DateFieldView field="date" />
		</>}
		allowNull
	/>
	<NumberField field="score" label="Score" />
</>)
