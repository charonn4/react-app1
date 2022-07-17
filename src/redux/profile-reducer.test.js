import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let state = {
    posts: [
        {id: 1, message: "first post", likes: 4},
        {id: 2, message: 'second post', likes: 13},
        {id: 3, message: 'third post', likes: 200},
    ]
}

test('length of posts should be incremented', () => {
    // test data
    let action = addPostActionCreator('test (test)')
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(4)
});

test('testing new message', () => {
    // test data
    let action = addPostActionCreator('test (tdd)')
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts[3].message).toBe('test (test)')
});

test('length of messages should be decrement after deleting', () => {
    // test data
    let action = deletePost(1)
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(2)
});

test('length of messages should not be decrement if id is incorrect', () => {
    // test data
    let action = deletePost(100)
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(3)
});

