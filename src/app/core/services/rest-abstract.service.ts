import { HttpParams } from "@angular/common/http";
import * as t from "io-ts";
import { Observable } from "rxjs";

export type Params = | Record<string, string | Array<string>>
                     | HttpParams;

export abstract class AbstractRestService<Codec extends t.Mixed> {
  protected constructor(
    protected resourcePath: string
  ) {}

  protected get baseUrl(): string {
    return `/api/${this.resourcePath}`;
  }

  public abstract getOne(id: number, params?: Params): Observable<t.TypeOf<Codec>>

  public abstract getList(resource: string): Observable<ReadonlyArray<t.TypeOf<Codec>>>

  public abstract create(entry: t.TypeOf<Codec>): Observable<t.TypeOf<Codec>>

  public abstract update(id: number, entry: t.TypeOf<Codec>): Observable<t.TypeOf<Codec>>

  public abstract delete(id: number): Observable<never>
}
