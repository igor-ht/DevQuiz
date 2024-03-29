import 'module-alias/register';
import server from './server';
import { connectDataBase, prisma } from '@/model/client';
import { seed } from '@/model/prisma/seed';
import { PORT } from './config';

const startServer = async () => {
	await connectDataBase();
	await seed();

	server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
};

startServer()
	.catch((error) => console.error(error))
	.finally(() => prisma.$disconnect());
