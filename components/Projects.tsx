
'use client';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [repos,setRepos]=useState<any[]>([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/yashkulkarni052/repos')
      .then(r=>r.json()).then(setRepos);
  },[]);

  return (
    <section className="section grid md:grid-cols-2 gap-6">
      {repos.slice(0,4).map(repo=>(
        <a key={repo.id} href={repo.html_url} target="_blank" className="card">
          <h3 className="font-semibold">{repo.name}</h3>
          <p className="text-gray-400">{repo.description}</p>
        </a>
      ))}
    </section>
  );
}
