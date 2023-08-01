import { DataGridScope, DateFieldView, DeleteEntityButton, GenericCell, HasOneSelectCell, LinkButton, NumberCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Player scores
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/playerScore/create">
					Create new player score
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="PlayerScore" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/playerScore/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<HasOneSelectCell field="player" header="player" options="Player.name" />
				<HasOneSelectCell
					field="gameSession"
					header="gameSession"
					options="GameSession"
					optionLabel={<>
						Date{': '}
						<DateFieldView field="date" />
					</>}
					lazy={false}
				/>
				<NumberCell field="score" header="Score" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
