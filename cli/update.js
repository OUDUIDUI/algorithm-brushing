const fs = require('fs');
const path = require('path');
const {log} = require('./log')

const update = ({cn, en, difficulty, url}) => {
    en = initEn(en);
    const projectPath = getProjectName(en);
    if(createProject(projectPath)) {
        fs.writeFileSync(`src/${projectPath}/index.ts`, `function ${getFunctionName(en)}() {}`);
        fs.writeFileSync(`src/${projectPath}/README.md`, `# ${cn}`);
        fs.writeFileSync(`src/${projectPath}/index.spec.ts`, `describe('${cn}', () => {});`)
        updateReadMeMarkdown({cn, difficulty, url, projectPath})
    }
}

const createProject = (name) => {
    if (checkHasPath(`src/${name}`)) {
        log('已存在该路径', 'red');
        return;
    }
    fs.mkdirSync(`src/${name}`);
    return true;

}

const updateReadMeMarkdown = ({cn, difficulty, url, projectPath}) => {
    let md = fs.readFileSync(getPath('README.md'), {encoding: 'utf-8'});
    md += `| [${cn}](src/${projectPath}/README.md) | ${difficulty} | ${url} |`;
    fs.writeFileSync(getPath('README.md'), md)
}

const initEn = (en) => {
    return en.split('-').join(' ');
}


const getProjectName = (en) => {
    return en.toLowerCase().split(' ').join('-');
}

const getFunctionName = (en) => {
    const arr = en.split(' ');
    return arr.reduce((acc, cur, idx) => {
        return idx ?
            acc += cur.slice(0, 1).toUpperCase() + cur.slice(1).toLowerCase() :
            acc += cur.toLowerCase()
    }, '')
}

const getPath = (src) => {
    return path.resolve(path.resolve(__dirname, '../'), src)
}

const checkHasPath = (path) => {
    try {
        fs.accessSync(getPath(path), fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = update;