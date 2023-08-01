import { DataGridScope, DateCell, DeleteEntityButton, GenericCell, LinkButton } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Game sessions
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/gameSession/create">
					Create new game session
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="GameSession" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/gameSession/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<DateCell field="date" header="Date" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
