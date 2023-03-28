import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

interface TreeNode {
  name: string;
  id?: number;
  children?: TreeNode[];
}

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss'],
})
export class NewRequestComponent implements OnInit {
  map = new Map<number, TreeNode>();
  tree: TreeNode[] = [
    {
      name: 'Node A',
      children: [
        { name: 'Child A1' },
        {
          name: 'Child A2',
          children: [
            { name: 'Grandchild A21' },
            { name: 'Grandchild A22' }
          ]
        }
      ]
    },
    {
      name: 'Node B',
      children: [
        { name: 'Child B1' },
        { name: 'Child B2' }
      ]
    }
  ];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories(2);
  }

  getCategories(parent_id: number) {
    return this.categoryService.getCategories(0, "actioncomm", `t.fk_parent=${parent_id}`)
      .subscribe({
        next: (result) => {
          console.log(`Jpurple-->${NewRequestComponent.name}::ngOnInit::getCategories for::${parent_id}`);
          const nodes = this.convertListToTree(result, parent_id);
          nodes.forEach((node) => {
            if (node.id) {
              this.getCategories(node.id);
            }
          })
        },
        error: (error) => {
          console.error(`Jpurple-->${NewRequestComponent.name}::ngOnInit::getCategories:${parent_id}:${JSON.stringify(error)}`);
        },
        complete: () => {

        }
      }
      );
  }

  convertListToTree(items: Category[], parent_id: number): TreeNode[] {
    //console.log(`Jpurple-->${NewRequestComponent.name}::convertListToTree::mapsize::${this.map.size}`);
    // Create nodes for each item and add them to a map based on their ID
    let child_nodes: TreeNode[] = [];
    for (const item of items) {
      if (item.id && !this.map.has(item.id)) {
        const node: TreeNode = {
          id: item.id,
          name: item.label
        };
        //console.log(`Jpurple-->${NewRequestComponent.name}::convertListToTree::addingchild::${JSON.stringify(node)}`);
        child_nodes.push(node);
        this.map.set(item.id, node);
      }
    }

    const parent_node = this.map.get(parent_id);
    if (parent_node) {
      parent_node.children = child_nodes
    } else {
      this.tree = child_nodes;
    }
    return child_nodes;
  }
}
