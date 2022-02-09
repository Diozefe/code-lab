import { application } from "./config/express_config";
import { server_properties } from "./config/settings";
import ConnectionDB from "./database/connection";
import https from "https";

try {
    
    const server = https.createServer({
        key:server_properties.https.key,
        cert: server_properties.https.cert
    },
        application
    );

    const conn = new ConnectionDB();
    conn.connect();
    
    server.listen(server_properties.port, ()=>{
        console.log('Server online Port: '+server_properties.port);
    })
    
} catch (error) {
    console.log(error);
}
