import { decode } from '@core/converters';
import {HttpClient, HttpParams} from "@angular/common/http";
import * as t from 'io-ts/lib/index';
import {EMPTY, Observable} from "rxjs";
import {switchMap, switchMapTo} from "rxjs/operators";
import { Params, AbstractRestService } from "./rest-abstract.service";

export class RestService<Codec extends t.Mixed> extends AbstractRestService<Codec> {
  protected constructor(
    protected resourcePath: string,
    protected codec: Codec,
    protected client: HttpClient,
  ) {
    super(resourcePath)
  }

  public getList(resource: string): Observable<ReadonlyArray<t.TypeOf<Codec>>> {
    return this.client
      .get<unknown>(`${ this.baseUrl }/${ resource }`)
      .pipe(
        switchMap(
          decode(
            t.array(this.codec)
          )
        )
      )
  }

  public getOne(id: number, params?: Params): Observable<t.TypeOf<Codec>> {
    return this.client
      .get<unknown>(`${ this.baseUrl }/${ id }`, { params })
      .pipe(
        switchMap(
          decode(this.codec)
        )
      )
  }

  public create(entry: t.TypeOf<Codec>): Observable<t.TypeOf<Codec>> {
    return this.client
      .post(`${ this.baseUrl }`, this.codec.encode(entry))
      .pipe(
        switchMap(
          decode(this.codec)
        )
      )
  }

  public update(id: number, entry: t.TypeOf<Codec>): Observable<t.TypeOf<Codec>> {
    return this.client
      .put(`${ this.baseUrl }/${ id }`, this.codec.encode(entry))
      .pipe(
        switchMap(
          decode(this.codec)
        )
      )
  }

  public delete(id: number): Observable<never> {
    return this.client
      .delete(`${ this.baseUrl }/${id}`)
      .pipe(
        switchMapTo(EMPTY)
      )
  }
}
