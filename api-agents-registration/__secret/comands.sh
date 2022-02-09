#Criar chave raiz
openssl genrsa -des3 -out localhost.key 2048

#Criar um certificado raiz
openssl req -x509 -new -nodes -key localhost.key -sha256 -days 1024 -out localhost.pem

#Criar um arquivo de solicitação de assinatura de certificado e um arquivo de chave
openssl req -new -nodes -out server.csr -newkey rsa:2048 -keyout server.key

openssl x509 -req -in server.csr -CA localhost.pem -CAkey localhost.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext