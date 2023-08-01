import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlayerScoreForm } from '../../../components/forms/PlayerScoreForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create player score
			</SlotSources.Title>
			<CreateScope entity="PlayerScore" redirectOnSuccess="admin/playerScore/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create player score" labelSaved="Create player score" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/playerScore/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Player scores
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PlayerScoreForm />
				</>
			</CreateScope>
		</>
	)
}
