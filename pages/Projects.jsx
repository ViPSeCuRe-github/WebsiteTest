const Projects = () => { const items = [ { title: "Hand Kabaddi Bot", desc: "Unique raid-defense game on Discord." }, { title: "Intership Cricket", desc: "Flagship cricket community with tournaments." }, { title: "Website Services", desc: "Affordable web services for youth orgs." }, { title: "Hero Bot", desc: "Hero-based battle bot under development." }, ];

return ( <div className="p-8"> <h2 className="text-3xl font-semibold mb-6">Our Projects</h2> <div className="grid md:grid-cols-2 gap-6"> {items.map((p, i) => ( <div key={i} className="p-4 bg-blue-800 rounded-xl shadow-lg"> <h3 className="text-xl font-bold">{p.title}</h3> <p className="text-sm mt-2">{p.desc}</p> </div> ))} </div> </div> ); };

export default Projects;
