import { useEffect } from 'react'
import { useProjectUserRoles, useRedirect } from '@contember/admin'

export default () => {
	const redirect = useRedirect()
	const roles = useProjectUserRoles()
	useEffect(() => {
		if (roles.has('admin')) {
			redirect('admin/player/list'), [redirect]
		}
	})
	return null
}
