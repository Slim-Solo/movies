import

const argList =process.argv.slice(2)
const args = {};

for (const str of argList) {
    const [key, value] = str.split('=');

    if (key && value && key.startsWith('--')) {
        console.log(key, value);
        args[key.slice(2)] = value;
    }
};

configDotenv.config({
    path: `./env.example`
})

console.log(args);

console.log();
console.log();
console.log();
console.log();
console.log();


export const PORT = 5517;
export const TITLE = '';
export const DB_USER = '';
export const DB_DATABASE = '';
export const DB_PASSWORD = '';

//console.log(process.argv[2].split('=')[1]);