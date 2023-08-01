import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { GamepadIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<UsersIcon />
				<>
					Players
				</>
			</Stack>}
			to="admin/player/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<GamepadIcon />
				<>
					Game Sessions
				</>
			</Stack>}
			to="admin/gameSession/list"
		/>
	</HasRole>
</Menu>)
