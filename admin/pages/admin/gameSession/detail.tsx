import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Game session detail
			</SlotSources.Title>
			<DetailScope entity="GameSession(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/gameSession/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Game sessions
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/gameSession/edit(id: $entity.id)">
						Edit game session
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="date" label="Date" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Player scores
								</h2>
								<LinkButton to="admin/playerScore/create">
									Create new player score
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="PlayerScore[gameSession.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/playerScore/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell field="player" header="player" options="Player.name" />
							<NumberCell field="score" header="Score" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
