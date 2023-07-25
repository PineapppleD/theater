import OrchsetrasTable from "./OrchestrasTable";
import AuthorsTable from "./AuthorsTable";
import ConductorsTable from './ConductorsTable';
import ActorsTable from "./ActorsTable";
import PerformancesTable from "./PerformancesTable";
import ProducersTable from "./ProducersTable";
import TicketsTable from "./TicketsTable";

const tables = {
    orchestras: OrchsetrasTable,
    authors: AuthorsTable,
    conductors: ConductorsTable,
    actors: ActorsTable,
    performances: PerformancesTable,
    producers: ProducersTable,
    tickets: TicketsTable,
  };

export const {orchestras, authors, conductors, actors, performances, producers, tickets} = tables