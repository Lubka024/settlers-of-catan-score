import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlayerForm } from '../../../components/forms/PlayerForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create player
			</SlotSources.Title>
			<CreateScope entity="Player" redirectOnSuccess="admin/player/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create player" labelSaved="Create player" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/player/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Players
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PlayerForm />
				</>
			</CreateScope>
		</>
	)
}
