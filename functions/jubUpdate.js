export default {
    async fetch(request, env, ctx) {
      const db = env.jubjub_db; // Assuming you have a D1 database binding named 'DB'
      
      try {
        const result = await db.prepare('SELECT Location FROM "jub-loc" ORDER BY Time DESC LIMIT 1').all();
        const resultReadable = result.results[0].Location;
        
        return new Response(`JubJub is ${resultReadable}`);
        
      } catch (e) {
        return new Response(e);
      }
    }
  };
  
  
  