import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { GameSessionForm } from '../../../components/forms/GameSessionForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create game session
			</SlotSources.Title>
			<CreateScope entity="GameSession" redirectOnSuccess="admin/gameSession/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create game session" labelSaved="Create game session" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/gameSession/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Game sessions
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<GameSessionForm />
				</>
			</CreateScope>
		</>
	)
}
