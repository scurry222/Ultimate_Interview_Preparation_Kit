#!/usr/bin/env lua

size = 8

function addqueen (board, queen)
    if queen > size then
        printboard(board)
    else
        for col = 1, size do
            if validplacement(board, queen, col) then
                board[queen] = col
                addqueen(board, queen + 1)
            end
        end
    end
end

function validplacement (board, queen, col)
    for i = 1, queen - 1 do
        if board[i] == col or
           board[i] - i == col - queen or
           board[i] + i == col + queen then
            return false
        end
    end
    return true
end

function printboard (board)
    for i = 1, size do
        for j = 1, size do
            io.write(board[i] == j and 'X' or '-', ' ')
        end
        io.write('\n')
    end
    io.write('\n')
    os.exit()
end

addqueen({}, 1)