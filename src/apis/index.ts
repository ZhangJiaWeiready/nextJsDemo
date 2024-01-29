import {generatorAPIS} from '@/lib/request'

enum apis {
  getTableList = 'GET api query: results, page, size'
  
}

export default generatorAPIS<typeof apis>(apis)