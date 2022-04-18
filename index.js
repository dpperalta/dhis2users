const path = require('path');
const xlsx = require('xlsx');
const fs = require('fs');

const fileName = '_usersVacunacionAdmtWithGroups_0.0.9.json' || 'user.json';

const filePath = path.resolve(__dirname, './data/data.xlsx');

const workbook = xlsx.readFile(filePath);
const sheetNames = workbook.SheetNames;

const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[1]]);

let users = [];

/* ******************************************
    Roles de DHIS2
   ****************************************** */
// Carga de información Tracker
/* const role = [
    { id: 'KrWvPlTDNRm' } 
]; */
// Administrador de programas
const role = [
    { id: 'ZFMsr1m94hV' } 
];

const password = 'Userdhis2.';
const uidEcuador = 'CcPKoI4rpPZ';
const usersUid = []
/* ******************************************
    Grupos ESAVI
   ****************************************** */
//const gruopId = 'e4hkKX6cZJD';
//const groupName = 'ESAVI - Epidemiólogos';
//const gruopId = 'yW9blsOC3Q1';
//const groupName = 'ESAVI - Personal de laboratorio';
//const gruopId = 'H9Pi4ELnHSk';
//const groupName = 'ESAVI - Administradores';

/* ******************************************
    Grupos Vacunación
   ****************************************** */
//const gruopId = 'GOZRxMTMCk2';
//const groupName = 'VACUNAS - Capturista';
const gruopId = 'Pe9g1YT8oZy';
const groupName = 'VACUNAS - Administrador';


data.map( (x, idx) => {
    users[idx] = {
        code: 'USRMSP00' + idx + 1,
        email: x.email,
        id: x.useruid,
        firstName: x.firstName.trim(),
        surname: x.surname.trim(),
        userCredentials: {
            username: x.user.trim(),
            password: x.pass.trim(),
            displayName: x.displayName,
            userInfo: {
                id: x.useruid
            },
            userRoles: role
        },
        organisationUnits: [
            { id: x.uid }
        ],
        teiSearchOrganisationUnits: [
            { id: uidEcuador }
        ],
        dataViewOrganisationUnits: [
            { id: x.uid }
        ]
    },
    usersUid[idx] = {
        id: x.useruid
    }
} );

fs.writeFile( fileName, JSON.stringify({ users, userGroups: [ {id: gruopId, name: groupName, users: usersUid}  ] }) , function(err) {
    if(err) return console.log('error:', err);
    console.log('Archivo creado satisfactoriamente');
});