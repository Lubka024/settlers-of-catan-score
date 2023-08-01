import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { GameSessionForm } from '../../../components/forms/GameSessionForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit game session
			</SlotSources.Title>
			<EditScope entity="GameSession(id=$id)" redirectOnSuccess="admin/gameSession/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/gameSession/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<GameSessionForm />
			</EditScope>
		</>
	)
}
