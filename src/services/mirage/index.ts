import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name: () => faker.name.findName(),
        email: () => faker.internet.email().toLowerCase(),
        createdAt: () => faker.date.recent(10),
      }),
    },

    seeds(server) {
      server.createList("user", 50);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", (schema, request) => {
        const { page = 1, per_page = 10 } = request.queryParams;

        const totalCount = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = schema
          .all("user")
          .models.sort((a, b) => {
            return a.createdAt < b.createdAt ? 1 : -1;
          })
          .slice(pageStart, pageEnd);

        return new Response(
          200,
          { "x-total-count": String(totalCount) },
          { users }
        );
      });
      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
