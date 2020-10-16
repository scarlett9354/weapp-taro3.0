import fly from '@/configs/fly'

class IndexService {
  test(data) {
    return fly.post('/api/wx/user/login', data)
  }
}

export default new IndexService()
