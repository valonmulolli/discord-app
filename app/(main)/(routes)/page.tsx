import { UserButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<div className='flex flex-none justify-center '>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
}
