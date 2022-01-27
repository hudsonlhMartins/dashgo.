import {createServer, Factory, Model, Response, ActiveModelSerializer} from 'miragejs'


type User={
    name: string;
    email: string;
    created_at: string;
}

export function makeServer(){

    const server = createServer({
        // isso aqui e para permitir fazer os relacionamento e cadastro de user
        serializers:{
            application: ActiveModelSerializer,
        },

        models:{
            user: Model.extend<Partial<User>>({}) // esse user e como fosse um tabela no banco
        // esse models e quais tipo de dados vamos guarda no banco de dados

        // esse Partial e ele tbm pode nçao ter alguns de User
        },

        factories:{
            user: Factory.extend({
                name(i: number){
                    return `User ${i +1}`
                },

                email(i: number){
                    return `User${i+1}@gmail.com`
                },

                createAt(){
                    return new Date()
                },
            })
        },

        seeds(server){
            server.createList('user', 200)
        },




        routes(){

            this.namespace='api'
            this.timing=720 // gerar um tempo para cada req

            this.get('users', function (schema, request){
                const {page = 1, per_page = 10 } = request.queryParams

                const total = schema.all('user').length
                
                const pageStart = (Number(page)-1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user'))
                    .users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    {'x-total-count': String(total)},
                    {users}
                )
            })
            this.post('/users/:id')

            this.post('users')


            this.namespace=''
            this.passthrough()
            // todas req passa do api vai passar pelo mirage se não a achar aqui ele vai seguir

        }

    })

    return server
}