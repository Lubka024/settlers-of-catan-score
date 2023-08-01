import { Box, DataGrid, DateFieldView, DeleteEntityButton, DetailScope, DisplayTextField, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Player detail
			</SlotSources.Title>
			<DetailScope entity="Player(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/player/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Players
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/player/edit(id: $entity.id)">
						Edit player
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
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
						<DataGrid entities="PlayerScore[player.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/playerScore/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
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
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
