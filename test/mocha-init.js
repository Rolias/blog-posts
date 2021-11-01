const chai = require(`chai`)
const sinonChai = require(`sinon-chai`)
const sinonAsPromised = require(`chai-as-promised`)

chai.use(sinonChai)
chai.use(sinonAsPromised)