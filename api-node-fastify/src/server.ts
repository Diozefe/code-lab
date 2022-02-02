import { router as server } from "./routes";

const start = async () =>{
    try {
        await server.listen(3000);
        console.log('Server online')
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
}

start();