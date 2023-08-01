import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlayerForm } from '../../../components/forms/PlayerForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit player
			</SlotSources.Title>
			<EditScope entity="Player(id=$id)" redirectOnSuccess="admin/player/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/player/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<PlayerForm />
			</EditScope>
		</>
	)
}
