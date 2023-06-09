import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefasService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefasService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm('deseja remover a tarefa "'+tarefa.nome+'"?')) {
      this.tarefasService.remover(tarefa.id);
      this.tarefas = this.tarefasService.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm('deseja alterar o status da tarefa "'+tarefa.nome+'"?')) {
      this.tarefasService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
