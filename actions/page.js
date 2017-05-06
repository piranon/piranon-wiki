import { CALL_API } from 'redux-api-middleware'
import { PAGES_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_PAGES_REQUEST,
  LOAD_PAGES_SUCCESS,
  LOAD_PAGES_FAILURE,

  LOAD_PAGE_REQUEST,
  LOAD_PAGE_SUCCESS,
  LOAD_PAGE_FAILURE,

  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAILURE
} from '../constants/actionTypes'

export const loadPages = () => ({
  [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
      method: 'GET',
      types: [LOAD_PAGES_REQUEST, LOAD_PAGES_SUCCESS, LOAD_PAGES_FAILURE]
  }
})

export const loadPage = (id) => ({
  [CALL_API]: {
    endpoint: `${PAGES_ENDPOINT}/${id}`,
    method: 'GET',
    types: [LOAD_PAGE_REQUEST, LOAD_PAGE_SUCCESS, LOAD_PAGE_FAILURE]
  }
})

export const createPage = (values) => ({
  [CALL_API]: {
    endpoint: PAGES_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(values),
    types: [CREATE_PAGE_REQUEST, CREATE_PAGE_SUCCESS, CREATE_PAGE_FAILURE]
  }
})