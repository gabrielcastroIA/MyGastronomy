export const ok = (body) => {
    return {
        success: true,
        statusCode: 200,
        body: body
    }
}

export const notFound = () => {
    return {
        success: false,
        statusCode: 404,
        body: {
            text: 'Recurso não encontrado'
        }
    }
}

export const serverError = (body) => {
    return {
        success: false,
        statusCode: 400,
        body
    }
}
