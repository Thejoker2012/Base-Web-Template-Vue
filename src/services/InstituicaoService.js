import http from '../api';

class InstituicaoService {

    getAll() {
        return http.get('instituicoes');
    }

    getOne(id) {
        return http.get(`instituicoes/${id}`)
    }

    create(data) {
        return http.post('instituicoes', data);
    }

    updated(id, data) {
        return http.put(`instituicoes/${id}`, data)
    }

    delete(id) {
        return http.delete(`instituicoes/${id}`)
    }
}

export default new InstituicaoService();