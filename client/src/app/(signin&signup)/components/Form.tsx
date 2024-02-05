export default function Form({ action, children }: { action: (payload: FormData) => void; children: React.ReactNode }) {
	return <form action={action}>{children}</form>;
}
