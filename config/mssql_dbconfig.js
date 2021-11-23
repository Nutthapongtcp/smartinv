//Import mysql


const config ={
    user        : 'node',
    password    : 'Nj@2021',
    server      : '192.168.1.72',
    database    : 'smartinvdb',
    options     : {
        trustedconnection: true,
        enableAritAbort: true,
        trustServerCertificate: true,
        encrypt: false
    }
}

module.exports = config